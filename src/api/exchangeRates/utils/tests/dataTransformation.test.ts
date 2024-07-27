import type { ExchangeRatesRoot } from "../../exchangeRates.types";
import {
  getFlagPath,
  mergeFlags,
  removeInvalidCurrencyData,
} from "../dataTransformation";

describe("dataTransformation", () => {
  describe("getFlagPath", () => {
    test("Should return the correct flag path when a matching flag exists", () => {
      const flags = ["us.png", "ca.png", "fr.png"];
      const currency = "USD";
      const result = getFlagPath(flags, currency);
      expect(result).toBe("us.png");
    });

    test("Should return an empty string when no matching flag exists", () => {
      const flags = ["us.png", "ca.png", "fr.png"];
      const currency = "JPY";
      const result = getFlagPath(flags, currency);
      expect(result).toBe("");
    });

    test("Should correctly match the flag regardless of case sensitivity", () => {
      const flags = ["US.png", "ca.png", "FR.png"];
      const currency = "usd";
      const result = getFlagPath(flags, currency);
      expect(result).toBe("US.png");
    });
  });

  describe("mergeFlags", () => {
    const exchangeRatesData = {
      fx: [{ currency: "USD" }, { currency: "EUR" }, { currency: "JPY" }],
    } as ExchangeRatesRoot;

    test("Should add flag paths to all currencies when matching flags exist", () => {
      const flags = ["us.png", "eu.png", "jp.png"];
      const result = mergeFlags(exchangeRatesData, flags);

      expect(result.fx).toEqual([
        { currency: "USD", flagPath: "./flags/us.png" },
        { currency: "EUR", flagPath: "./flags/eu.png" },
        { currency: "JPY", flagPath: "./flags/jp.png" },
      ]);
    });

    test("Should not add any flag paths when no matching flags exist", () => {
      const flags = ["gb.png", "au.png", "ca.png"];
      const result = mergeFlags(exchangeRatesData, flags);

      expect(result.fx).toEqual([
        { currency: "USD" },
        { currency: "EUR" },
        { currency: "JPY" },
      ]);
    });

    test("Should correctly add flag paths regardless of case sensitivity", () => {
      const flags = ["US.png", "EU.png", "JP.png"];
      const result = mergeFlags(exchangeRatesData, flags);

      expect(result.fx).toEqual([
        { currency: "USD", flagPath: "./flags/US.png" },
        { currency: "EUR", flagPath: "./flags/EU.png" },
        { currency: "JPY", flagPath: "./flags/JP.png" },
      ]);
    });
  });

  describe("removeInvalidCurrencyData", () => {
    test("Should filter out only the invalid currencies and return the valid ones", () => {
      const exchangeRatesData = {
        fx: [
          { currency: "USD", nameI18N: "United States Dollar" },
          { currency: "", nameI18N: "" },
          { currency: "EUR", nameI18N: "Euro" },
          { currency: null, nameI18N: null },
          { currency: null, nameI18N: "Euro" },
          { currency: "EUR", nameI18N: null },
        ],
      } as ExchangeRatesRoot;

      const result = removeInvalidCurrencyData(exchangeRatesData);

      expect(result.fx).toEqual([
        { currency: "USD", nameI18N: "United States Dollar" },
        { currency: "EUR", nameI18N: "Euro" },
        { currency: null, nameI18N: "Euro" },
        { currency: "EUR", nameI18N: null },
      ]);
    });
  });
});

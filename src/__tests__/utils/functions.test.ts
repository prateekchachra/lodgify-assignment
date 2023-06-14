import React from "react";
import { calculateProgress, calculateTotalProgress } from "../../utils/functions";
import { GROUPS } from "../../utils/constants";

describe("Functions in utils", () => {
  describe("calculateTotalProgress", () => {
    it("should return 1 if the array is empty", () => {
      const progress = calculateTotalProgress([]);
      expect(progress).toBe(1);
    }),
    it("should return the correct value for mock data", () => {
      const progress = calculateTotalProgress(GROUPS);
      expect(progress).toBe(100)
    })
  });
  describe("calculateProgress", () => {
    it("should return 1 if the array is empty", () => {
      const progress = calculateProgress([], 1);
      expect(progress).toBe(1);
    }),
    it("should return 1 if the totalProgress is 0", () => {
      const progress = calculateProgress([], 0);
      expect(progress).toBe(1);
    }),
    it("should return the correct value for mock data", () => {
      const progress = calculateProgress(GROUPS, 100);
      expect(progress).toBe(0)
    })
  });
});

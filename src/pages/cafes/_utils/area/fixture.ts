import type { NewtArea } from "@/pages/_schemas/area";
import { literal, parse, union, type InferOutput } from "valibot";

const mockAreaIdSchema = union([
  literal("1"),
  literal("2"),
  literal("3"),
  literal("4"),
  literal("5"),
  literal("6"),
]);

export function isMockAreaId(value: unknown) {
  return parse(mockAreaIdSchema, value);
}

export type MockAreaId = InferOutput<typeof mockAreaIdSchema>;

export function areaFixtureFactory(areaId: MockAreaId): NewtArea {
  switch (areaId) {
    case "1": {
      return {
        _id: "1",
        name: "武庫",
        slug: "muko",
        priority: 1,
      };
    }
    case "2": {
      return {
        _id: "2",
        name: "立花",
        slug: "tachibana",
        priority: 2,
      };
    }
    case "3": {
      return {
        _id: "3",
        name: "園田",
        slug: "sonoda",
        priority: 3,
      };
    }
    case "4": {
      return {
        _id: "4",
        name: "大庄",
        slug: "osho",
        priority: 4,
      };
    }
    case "5": {
      return {
        _id: "5",
        name: "中央",
        slug: "chuo",
        priority: 5,
      };
    }
    case "6": {
      return {
        _id: "6",
        name: "小田",
        slug: "oda",
        priority: 6,
      };
    }
    default: {
      const _: never = areaId;
      throw new Error(`Unknown areaId: ${_}`);
    }
  }
}

export const areasFixture: NewtArea[] = [
  areaFixtureFactory("1"),
  areaFixtureFactory("2"),
  areaFixtureFactory("3"),
  areaFixtureFactory("4"),
  areaFixtureFactory("5"),
  areaFixtureFactory("6"),
];

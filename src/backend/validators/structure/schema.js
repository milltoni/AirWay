export default {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    id: "https://example.com/schema.json",
    type: "object",
    patternProperties: {
      "^[a-zA-Z]": { $ref: "#/$defs/language" }
    },
    $defs: {
      language: {
        type: "object",
        properties: {
          name: { type: "string" },
          creator: { type: "string" },
          description: { type: "string" },
          people: { type: "array", items: { type: "string" } },
          features: { $ref: "#/$defs/features" },
          influenced_by: {
            $ref: "#/$defs/references/anyReference"
          },
          influenced: {
            $ref: "#/$defs/references/anyReference"
          },
        },
        required: ["name"]
      },
      features: {
        type: "object",
        description: "Wrapper for feature items.",
        patternProperties: {
          "^[a-zA-Z]+": {
            $ref: "#/$defs/feature"
          }
        },
        additionalProperties: false
      },
      feature: {
        type: "object",
        description: "Feature on one programming language",
        properties: {
          description: { type: "string" },
          invented: { type: "boolean" },
          inspired_by: {
            $ref: "#/$defs/references/anyReference"
          },
          predated_by: {
            $ref: "#/$defs/references/anyReference"
          },
          justified_by: {
            $ref: "#/$defs/references/anyReference"
          }
        },
        required: ["description"]
      },
      references: {
        anyReference: {
          anyOf: [
            { $ref: "#/$defs/references/singleAnyReference" },
            { $ref: "#/$defs/references/arrayAnyReference" }
          ],
          validDestinations: ["#/$defs/feature", "#/$defs/language"]
        },
        arrayAnyReference: {
          type: "array",
          items: { $ref: "#/$defs/references/singleAnyReference" },
          validDestinations: ["#/$defs/feature", "#/$defs/language"]
        },
        singleAnyReference: {
          anyOf: [
            { $ref: "#/$defs/references/languageReference" },
            { $ref: "#/$defs/references/featureReference" }
          ],
          validDestinations: ["#/$defs/feature", "#/$defs/language"]
        },
        languageReference: {
          type: "string",
          description: "Reference of programming language",
          validDestinations: ["#/$defs/language"]
        },
        featureReference: {
          type: "string",
          description: "Reference of feature: language.features.f1",
          validDestinations: ["#/$defs/feature"]
        }
      }
    }
  };
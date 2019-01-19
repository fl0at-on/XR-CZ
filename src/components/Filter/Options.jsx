export const Options = {
  filters: [
    {
      id: 1,
      name: "Body Part",
      type: "select",
      options: [
        "Chest",
        "Back",
        "Shoulders",
        "Biceps",
        "Triceps",
        "Thighs",
        "Glutes",
        "Quads"
      ],
      default: ""
    },
    { id: 2, name: "Exercise", type: "text", default: "" },
    { id: 3, name: "Begin Date", type: "date", default: "" },
    { id: 4, name: "End Date", type: "date", default: "" }
  ],
  default: [
    { "Body Part": "" },
    { Exercise: "" },
    { "Begin Date": "" },
    { "End Date": "" }
  ]
};

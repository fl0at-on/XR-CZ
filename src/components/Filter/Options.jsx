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
      ]
    },
    { id: 3, name: "Begin Date", type: "date" },
    { id: 4, name: "End Date", type: "date" },
    { id: 2, name: "Exercise", type: "text" }
  ],
  initialValues: function() {
    return this.filters.map(obj => {
      return { [obj.name]: "" };
    });
  }
};

// export const Options = {
//   filters: {
//     bodyPart: {
//       id: 1,
//       name: "Body Part",
//       type: "select",
//       options: [
//         "Chest",
//         "Back",
//         "Shoulders",
//         "Biceps",
//         "Triceps",
//         "Thighs",
//         "Glutes",
//         "Quads"
//       ],
//       default: ""
//     },
//     exercise: { id: 2, name: "Exercise", type: "text", default: "" },
//     beginDate: { id: 3, name: "Begin Date", type: "date", default: "" },
//     endDate: { id: 4, name: "End Date", type: "date", default: "" }
//   },
//   default: [
//     { "Body Part": "" },
//     { Exercise: "" },
//     { "Begin Date": "" },
//     { "End Date": "" }
//   ]
// };

//Options.filters.exercise.name === "Exercise"
//Options.filters.exercise.type === "text"

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("dealers")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("dealers").insert([
        {
          VIN: "1GCHK53K19F178873",
          Car_Make: "Chevrolet",
          Car_Model: 1997,
          Car_Milage: 113458,
          Transmission_Info: "N/A",
          Title_Status: "Salvage",
        },
        {
          VIN: "5J6RE38389L070344",
          Car_Make: "Ford",
          Car_Model: 2012,
          Car_Milage: 78541,
          Transmission_Info: "N/A",
          Title_Status: "Clean",
        },
        {
          VIN: "1C4RDHDG2EC404148",
          Car_Make: "Tesla",
          Car_Model: 2019,
          Car_Milage: 5623,
          Transmission_Info: "N/A",
          Title_Status: "Clean",
        },
        {
          VIN: "3GCPCSE08BG158837",
          Car_Make: "Volkswagen",
          Car_Model: 2020,
          Car_Milage: 2312,
          Transmission_Info: "N/A",
          Title_Status: "Clean",
        },
        {
          VIN: "KMHGC46E29U064350",
          Car_Make: "Lexus",
          Car_Model: 1986,
          Car_Milage: 315265,
          Transmission_Info: "N/A",
          Title_Status: "Salvage",
        },
      ]);
    });
};

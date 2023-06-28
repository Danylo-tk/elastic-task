const client = require("../elasticsearch/client");

const getAllUsersCount = async (req, res) => {
  const result = await client.count({
    index: "users",
  });

  res.status(200).json(result);
};

const getAverageAge = async (req, res) => {
  const response = await client.search({
    index: "users",
    body: {
      size: 0,
      aggs: {
        average_age: {
          avg: {
            field: "age",
          },
        },
      },
    },
  });

  res.status(200).json(response.aggregations.average_age);
};

const getTopPopularNames = async (req, res) => {
  const response = await client.search({
    index: "users",
    body: {
      size: 0,
      aggs: {
        popular_names: {
          terms: {
            field: "name.keyword",
            size: 10,
            order: { _count: "desc" },
          },
        },
      },
    },
  });

  res.status(200).json(response.aggregations.popular_names.buckets);
};

const createUser = async (req, res) => {
  await client.index({
    index: "users",
    document: {
      name: req.body.name,
      surname: req.body.surname,
      age: req.body.age,
    },
  });
};

module.exports = {
  getAllUsersCount,
  createUser,
  getAverageAge,
  getTopPopularNames,
};

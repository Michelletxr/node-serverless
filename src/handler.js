exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
    }),
  };
};


module.exports.getData = async (event) => {
  AppDataSource.initialize().then( async () => {
    console.log("Conectado ao banco de dados");
    const baseRepository = AppDataSource.getRepository(BaseModel);
    try {
      const data = await  baseRepository.find();
      return res.json(data);
    } catch (error) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            message: "bad reqquest",
          }),
        };
      }
  })
}

module.exports.postData = async (event) => {
  console.log(event)

  return buildResponse(201, {
   "data": ""
  })
}

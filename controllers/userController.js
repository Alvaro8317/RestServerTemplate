import { response } from "express";
const userGet = (req, res = response) => {
    const {
        name = "No name",
        state = true,
        page = 1,
        limit = 10,
    } = req.query; /* Se recomienda desestructurar solo lo que le interesa a uno */
    res.json({
        msg: "GET API - Controller",
        data: { state, name, page, limit },
    });
};

const userPost = (req, res = response) => {
    const { name, age } = req.body;
    res.json({
        msg: "POST API - Controller",
        info: {
            name,
            age,
        },
    });
};

const userPut = (req, res = response) => {
    const id = req.params.userId;
    res.json({
        msg: "PUT API - Controller",
        id,
    });
};

const userPatch = (req, res = response) => {
    const body = req.body;
    res.json({
        msg: "PATCH API - Controller",
        body,
    });
    console.log(body);
};
const userDelete = (req, res = response) => {
    res.json({
        msg: "DELETE API - Controller",
    });
};
export { userGet, userPost, userPut, userPatch, userDelete };

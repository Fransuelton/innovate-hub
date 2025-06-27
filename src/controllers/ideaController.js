import { ideas } from "../data/data.js";

export const createIdea = (request, response) => {
  const { title, description } = request.body;

  if (title && description) {
    ideas.push({
      title,
      description,
      id: Math.random(),
    });

    return response.status(201).json({
      success: true,
      message: "Idea created successfully.",
    });
  } else {
    return response.status(400).json({
      success: false,
      error: "Both title and description are required to create a new idea.",
    });
  }
};

export const getIdeas = (request, response) => {
  return response.status(200).json({
    success: true,
    data: ideas,
  });
};

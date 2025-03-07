import api from './index';
import { CreateInstructorRequest } from './dtos/instructors/CreateInstructorRequest'; 
import { InstructorDto } from './dtos/instructors/InstructorDto'; 
import { UpdateInstructorRequest } from './dtos/instructors/UpdateInstructorRequest';

export const getInstructors = async (): Promise<InstructorDto[]> => {
  const response = await api.get<InstructorDto[]>("instructors/getall");
  return response.data;
}

export const getInstructorById = async (id: string): Promise<InstructorDto> => {
  const response = await api.get<InstructorDto>(`instructors/getone/${id}`);
  return response.data;
}

export const createInstructor = async (request: CreateInstructorRequest): Promise<InstructorDto> => {
  const response = await api.post<InstructorDto>("instructors/add", request, {
    headers: {"Content-Type": "application/json",}
  });
  return response.data;
}

export const updateInstructor = async (id: string, request: UpdateInstructorRequest): Promise<InstructorDto> => {
  const response = await api.put<InstructorDto>(`instructors/update/${id}`, request, {
    headers: {"Content-Type": "application/json",}
  });
  return response.data;
}

export const deleteInstructor = async (id: string): Promise<InstructorDto> => {
  const response = await api.delete<InstructorDto>(`instructors/delete/${id}`);
  return response.data;
}

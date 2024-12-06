import Typography from '@mui/material/Typography';
import UpdateInstructorForm from '@/components/UpdateInstructorForm';


export default function UpdateInstructor(props: { params: { id: string }}) {
  const instructorId = props.params.id
  return <>
  <Typography variant="h4" mb={2}>
    Update Instructor
  </Typography>
  <UpdateInstructorForm id={instructorId} />
</>
}
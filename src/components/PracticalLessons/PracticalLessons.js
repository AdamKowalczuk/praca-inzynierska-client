import React from "react";
import LessonMenu from "../Menu/LessonMenu";
import {
  // useDispatch,
  useSelector,
} from "react-redux";
import Menu from "../Menu/Menu";
const PracticalLessons = () => {
  // const dispatch = useDispatch();
  const actualCourse = useSelector((state) => state.actualCourse);
  // const user = useSelector((state) => state.user);
  const course = useSelector((state) => state.user.courses[actualCourse]);

  return (
    <>
      <LessonMenu
        firstIconBackground="transparent"
        secondIconBackground="transparent"
        thirdIconBackground={course.secondaryColor}
        firstIconColor={course.secondaryColor}
        secondIconColor={course.secondaryColor}
        thirdIconColor={course.primaryColor}
      />
      <Menu
        link="/kursy/rozdziały"
        text="Zadania"
        isColored={true}
        primaryColor={course.primaryColor}
        secondaryColor={course.secondaryColor}
      />
    </>
  );
};

export default PracticalLessons;

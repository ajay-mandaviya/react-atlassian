import { ApplicationDispatch, ApplicationState } from "./../store/store";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;
export const useAppDispatch: () => ApplicationDispatch = useDispatch;

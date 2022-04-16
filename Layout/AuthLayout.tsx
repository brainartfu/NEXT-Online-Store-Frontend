import React, { FC } from "react";
import { FrontLayoutProps } from "../types/page";

const AuthLayout: FC<FrontLayoutProps> = ({ children }) => {
	return <div>{children}</div>;
};

export default AuthLayout;

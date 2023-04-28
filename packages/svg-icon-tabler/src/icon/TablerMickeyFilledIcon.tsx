import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMickeyFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMickeyFilledIcon = React.forwardRef<SVGSVGElement, TablerMickeyFilledIconProps>(
	function TablerMickeyFilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M18.501 2a4.5 4.5 0 0 1 .878 8.913a8 8 0 1 1 -15.374 3.372l-.005 -.285l.005 -.285a7.991 7.991 0 0 1 .615 -2.803a4.5 4.5 0 0 1 -3.187 -6.348a4.505 4.505 0 0 1 3.596 -2.539l.225 -.018l.281 -.007l.244 .009a4.5 4.5 0 0 1 4.215 4.247a8.001 8.001 0 0 1 4.013 0a4.5 4.5 0 0 1 4.493 -4.256z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMickeyFilledIcon.displayName = "TablerMickeyFilledIcon";
}

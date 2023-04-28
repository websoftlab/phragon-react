import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMicrophone2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMicrophone2Icon = React.forwardRef<SVGSVGElement, TablerMicrophone2IconProps>(
	function TablerMicrophone2Icon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
				<path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMicrophone2Icon.displayName = "TablerMicrophone2Icon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLanguagesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLanguagesIcon = React.forwardRef<SVGSVGElement, TablerLanguagesIconProps>(
	function TablerLanguagesIcon(props, ref) {
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
				<path d="m5 8 6 6" />
				<path d="m4 14 6-6 2-3" />
				<path d="M2 5h12" />
				<path d="M7 2h1" />
				<path d="m22 22-5-10-5 10" />
				<path d="M14 18h6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLanguagesIcon.displayName = "TablerLanguagesIcon";
}

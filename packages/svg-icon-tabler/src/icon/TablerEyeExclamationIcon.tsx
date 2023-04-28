import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEyeExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEyeExclamationIcon = React.forwardRef<SVGSVGElement, TablerEyeExclamationIconProps>(
	function TablerEyeExclamationIcon(props, ref) {
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
				<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
				<path d="M14.473 17.659a8.897 8.897 0 0 1 -2.473 .341c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
				<path d="M19 16v3" />
				<path d="M19 22v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEyeExclamationIcon.displayName = "TablerEyeExclamationIcon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderHermaphroditeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderHermaphroditeIcon = React.forwardRef<SVGSVGElement, TablerGenderHermaphroditeIconProps>(
	function TablerGenderHermaphroditeIcon(props, ref) {
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
				<path d="M12 14v7" />
				<path d="M9 18h6" />
				<path d="M12 6a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" />
				<path d="M15 3a3 3 0 1 1 -6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderHermaphroditeIcon.displayName = "TablerGenderHermaphroditeIcon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderTrasvestiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderTrasvestiIcon = React.forwardRef<SVGSVGElement, TablerGenderTrasvestiIconProps>(
	function TablerGenderTrasvestiIcon(props, ref) {
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
				<path d="M15 20a5 5 0 1 1 0 -10a5 5 0 0 1 0 10z" />
				<path d="M6 6l5.4 5.4" />
				<path d="M4 8l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderTrasvestiIcon.displayName = "TablerGenderTrasvestiIcon";
}

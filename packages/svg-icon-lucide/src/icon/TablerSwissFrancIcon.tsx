import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSwissFrancIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSwissFrancIcon = React.forwardRef<SVGSVGElement, TablerSwissFrancIconProps>(
	function TablerSwissFrancIcon(props, ref) {
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
				<path d="M10 21V3h8" />
				<path d="M6 16h9" />
				<path d="M10 9.5h7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSwissFrancIcon.displayName = "TablerSwissFrancIcon";
}

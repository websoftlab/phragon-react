import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderGenderqueerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderGenderqueerIcon = React.forwardRef<SVGSVGElement, TablerGenderGenderqueerIconProps>(
	function TablerGenderGenderqueerIcon(props, ref) {
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
				<path d="M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
				<path d="M12 11v-8" />
				<path d="M14.5 4.5l-5 3" />
				<path d="M9.5 4.5l5 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderGenderqueerIcon.displayName = "TablerGenderGenderqueerIcon";
}

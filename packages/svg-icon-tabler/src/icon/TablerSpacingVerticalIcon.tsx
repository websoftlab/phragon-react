import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSpacingVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSpacingVerticalIcon = React.forwardRef<SVGSVGElement, TablerSpacingVerticalIconProps>(
	function TablerSpacingVerticalIcon(props, ref) {
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
				<path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />
				<path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
				<path d="M16 12h-8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSpacingVerticalIcon.displayName = "TablerSpacingVerticalIcon";
}

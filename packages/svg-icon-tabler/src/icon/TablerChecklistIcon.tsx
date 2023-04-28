import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChecklistIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChecklistIcon = React.forwardRef<SVGSVGElement, TablerChecklistIconProps>(
	function TablerChecklistIcon(props, ref) {
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
				<path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
				<path d="M14 19l2 2l4 -4" />
				<path d="M9 8h4" />
				<path d="M9 12h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerChecklistIcon.displayName = "TablerChecklistIcon";
}

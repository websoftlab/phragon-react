import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTransitionLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTransitionLeftIcon = React.forwardRef<SVGSVGElement, TablerTransitionLeftIconProps>(
	function TablerTransitionLeftIcon(props, ref) {
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
				<path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3" />
				<path d="M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0z" />
				<path d="M15 12h-8" />
				<path d="M10 9l-3 3l3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTransitionLeftIcon.displayName = "TablerTransitionLeftIcon";
}

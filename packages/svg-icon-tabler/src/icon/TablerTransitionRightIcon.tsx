import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTransitionRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTransitionRightIcon = React.forwardRef<SVGSVGElement, TablerTransitionRightIconProps>(
	function TablerTransitionRightIcon(props, ref) {
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
				<path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" />
				<path d="M3 18v-12a3 3 0 1 1 6 0v12a3 3 0 0 1 -6 0z" />
				<path d="M9 12h8" />
				<path d="M14 15l3 -3l-3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTransitionRightIcon.displayName = "TablerTransitionRightIcon";
}

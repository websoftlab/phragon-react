import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSignRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSignRightIcon = React.forwardRef<SVGSVGElement, TablerSignRightIconProps>(
	function TablerSignRightIcon(props, ref) {
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
				<path d="M8 21h4" />
				<path d="M10 21v-10" />
				<path d="M10 6v-3" />
				<path d="M6 6h10l2 2.5l-2 2.5h-10z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSignRightIcon.displayName = "TablerSignRightIcon";
}

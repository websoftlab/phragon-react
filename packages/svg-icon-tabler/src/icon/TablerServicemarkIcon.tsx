import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerServicemarkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerServicemarkIcon = React.forwardRef<SVGSVGElement, TablerServicemarkIconProps>(
	function TablerServicemarkIcon(props, ref) {
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
				<path d="M9 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
				<path d="M13 15v-6l3 4l3 -4v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerServicemarkIcon.displayName = "TablerServicemarkIcon";
}

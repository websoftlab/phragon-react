import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageUpIcon = React.forwardRef<SVGSVGElement, TablerMessageUpIconProps>(
	function TablerMessageUpIcon(props, ref) {
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
				<path d="M8 9h8" />
				<path d="M8 13h6" />
				<path d="M11.99 18.606l-3.99 2.394v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
				<path d="M19 22v-6" />
				<path d="M22 19l-3 -3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessageUpIcon.displayName = "TablerMessageUpIcon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTransformIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTransformIcon = React.forwardRef<SVGSVGElement, TablerTransformIconProps>(
	function TablerTransformIcon(props, ref) {
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
				<path d="M3 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
				<path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
				<path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
				<path d="M15 18a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTransformIcon.displayName = "TablerTransformIcon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDualScreenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDualScreenIcon = React.forwardRef<SVGSVGElement, TablerDualScreenIconProps>(
	function TablerDualScreenIcon(props, ref) {
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
				<path d="M5 4l8 3v15l-8 -3z" />
				<path d="M13 19h6v-15h-14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDualScreenIcon.displayName = "TablerDualScreenIcon";
}

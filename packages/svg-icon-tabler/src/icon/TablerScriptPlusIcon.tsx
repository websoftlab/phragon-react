import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScriptPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScriptPlusIcon = React.forwardRef<SVGSVGElement, TablerScriptPlusIconProps>(
	function TablerScriptPlusIcon(props, ref) {
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
				<path d="M17 19h4" />
				<path d="M14 20h-8a3 3 0 0 1 0 -6h11a3 3 0 0 0 -3 3m7 -3v-8a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v8" />
				<path d="M19 17v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerScriptPlusIcon.displayName = "TablerScriptPlusIcon";
}

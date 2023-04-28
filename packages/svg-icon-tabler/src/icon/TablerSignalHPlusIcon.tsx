import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSignalHPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSignalHPlusIcon = React.forwardRef<SVGSVGElement, TablerSignalHPlusIconProps>(
	function TablerSignalHPlusIcon(props, ref) {
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
				<path d="M7 16v-8" />
				<path d="M11 8v8" />
				<path d="M7 12h4" />
				<path d="M14 12h4" />
				<path d="M16 10v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSignalHPlusIcon.displayName = "TablerSignalHPlusIcon";
}

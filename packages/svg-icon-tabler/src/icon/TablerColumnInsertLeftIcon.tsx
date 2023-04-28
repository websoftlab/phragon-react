import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerColumnInsertLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerColumnInsertLeftIcon = React.forwardRef<SVGSVGElement, TablerColumnInsertLeftIconProps>(
	function TablerColumnInsertLeftIcon(props, ref) {
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
				<path d="M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1z" />
				<path d="M5 12l4 0" />
				<path d="M7 10l0 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerColumnInsertLeftIcon.displayName = "TablerColumnInsertLeftIcon";
}

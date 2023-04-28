import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHierarchyOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHierarchyOffIcon = React.forwardRef<SVGSVGElement, TablerHierarchyOffIconProps>(
	function TablerHierarchyOffIcon(props, ref) {
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
				<path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M17.585 17.587a2 2 0 0 0 2.813 2.843" />
				<path d="M6.5 17.5l5.5 -4.5l5.5 4.5" />
				<path d="M12 7v1m0 4v1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHierarchyOffIcon.displayName = "TablerHierarchyOffIcon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHierarchy2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHierarchy2Icon = React.forwardRef<SVGSVGElement, TablerHierarchy2IconProps>(
	function TablerHierarchy2Icon(props, ref) {
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
				<path d="M10 3h4v4h-4z" />
				<path d="M3 17h4v4h-4z" />
				<path d="M17 17h4v4h-4z" />
				<path d="M7 17l5 -4l5 4" />
				<path d="M12 7l0 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHierarchy2Icon.displayName = "TablerHierarchy2Icon";
}

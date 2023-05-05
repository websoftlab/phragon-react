import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileLock2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileLock2Icon = React.forwardRef<SVGSVGElement, TablerFileLock2IconProps>(
	function TablerFileLock2Icon(props, ref) {
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
				<path d="M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
				<path d="M14 2 L14 8 L20 8" />
				<path d="M3 13 H9 A1 1 0 0 1 10 14 V17 A1 1 0 0 1 9 18 H3 A1 1 0 0 1 2 17 V14 A1 1 0 0 1 3 13 z" />
				<path d="M8 13v-2a2 2 0 1 0-4 0v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFileLock2Icon.displayName = "TablerFileLock2Icon";
}

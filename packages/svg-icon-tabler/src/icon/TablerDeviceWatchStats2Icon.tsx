import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceWatchStats2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceWatchStats2Icon = React.forwardRef<SVGSVGElement, TablerDeviceWatchStats2IconProps>(
	function TablerDeviceWatchStats2Icon(props, ref) {
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
				<path d="M6 6m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
				<path d="M9 18v3h6v-3" />
				<path d="M9 6v-3h6v3" />
				<path d="M12 10a2 2 0 1 0 2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceWatchStats2Icon.displayName = "TablerDeviceWatchStats2Icon";
}

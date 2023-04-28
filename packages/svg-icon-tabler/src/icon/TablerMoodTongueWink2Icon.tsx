import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodTongueWink2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodTongueWink2Icon = React.forwardRef<SVGSVGElement, TablerMoodTongueWink2IconProps>(
	function TablerMoodTongueWink2Icon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
				<path d="M15 10h-.01" />
				<path d="M10 14v2a2 2 0 1 0 4 0v-2m1.5 0h-7" />
				<path d="M7 10c.5 -1 2.5 -1 3 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodTongueWink2Icon.displayName = "TablerMoodTongueWink2Icon";
}

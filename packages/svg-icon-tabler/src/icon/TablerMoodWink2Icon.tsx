import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodWink2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodWink2Icon = React.forwardRef<SVGSVGElement, TablerMoodWink2IconProps>(
	function TablerMoodWink2Icon(props, ref) {
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
				<path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
				<path d="M9 10h-.01" />
				<path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
				<path d="M15.5 8.5l-1.5 1.5l1.5 1.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodWink2Icon.displayName = "TablerMoodWink2Icon";
}

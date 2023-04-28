import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodSilenceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodSilenceIcon = React.forwardRef<SVGSVGElement, TablerMoodSilenceIconProps>(
	function TablerMoodSilenceIcon(props, ref) {
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
				<path d="M15 10h-.01" />
				<path d="M8 15h8" />
				<path d="M9 14v2" />
				<path d="M12 14v2" />
				<path d="M15 14v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodSilenceIcon.displayName = "TablerMoodSilenceIcon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodAnnoyedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodAnnoyedIcon = React.forwardRef<SVGSVGElement, TablerMoodAnnoyedIconProps>(
	function TablerMoodAnnoyedIcon(props, ref) {
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
				<path d="M15 14c-2 0 -3 1 -3.5 2.05" />
				<path d="M9 10h-.01" />
				<path d="M15 10h-.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodAnnoyedIcon.displayName = "TablerMoodAnnoyedIcon";
}

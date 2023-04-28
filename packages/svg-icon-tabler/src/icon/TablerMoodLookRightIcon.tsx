import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodLookRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodLookRightIcon = React.forwardRef<SVGSVGElement, TablerMoodLookRightIconProps>(
	function TablerMoodLookRightIcon(props, ref) {
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
				<path d="M15 9h-.01" />
				<path d="M20 15h-4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMoodLookRightIcon.displayName = "TablerMoodLookRightIcon";
}

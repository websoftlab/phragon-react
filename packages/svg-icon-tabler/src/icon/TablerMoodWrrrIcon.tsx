import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodWrrrIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodWrrrIcon = React.forwardRef<SVGSVGElement, TablerMoodWrrrIconProps>(function TablerMoodWrrrIcon(
	props,
	ref
) {
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
			<path d="M8 16l1 -1l1.5 1l1.5 -1l1.5 1l1.5 -1l1 1" />
			<path d="M8.5 11.5l1.5 -1.5l-1.5 -1.5" />
			<path d="M15.5 11.5l-1.5 -1.5l1.5 -1.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodWrrrIcon.displayName = "TablerMoodWrrrIcon";
}

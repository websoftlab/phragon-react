import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodWinkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodWinkIcon = React.forwardRef<SVGSVGElement, TablerMoodWinkIconProps>(function TablerMoodWinkIcon(
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M15 10h.01" />
			<path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
			<path d="M8.5 8.5l1.5 1.5l-1.5 1.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodWinkIcon.displayName = "TablerMoodWinkIcon";
}

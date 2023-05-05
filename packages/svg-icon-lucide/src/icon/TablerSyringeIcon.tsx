import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSyringeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSyringeIcon = React.forwardRef<SVGSVGElement, TablerSyringeIconProps>(function TablerSyringeIcon(
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
			<path d="m18 2 4 4" />
			<path d="m17 7 3-3" />
			<path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
			<path d="m9 11 4 4" />
			<path d="m5 19-3 3" />
			<path d="m14 4 6 6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSyringeIcon.displayName = "TablerSyringeIcon";
}

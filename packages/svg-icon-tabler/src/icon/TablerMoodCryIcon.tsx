import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMoodCryIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMoodCryIcon = React.forwardRef<SVGSVGElement, TablerMoodCryIconProps>(function TablerMoodCryIcon(
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
			<path d="M9 10l.01 0" />
			<path d="M15 10l.01 0" />
			<path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
			<path d="M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z" />
			<path d="M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMoodCryIcon.displayName = "TablerMoodCryIcon";
}

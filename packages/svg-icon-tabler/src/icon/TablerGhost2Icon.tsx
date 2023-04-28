import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGhost2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGhost2Icon = React.forwardRef<SVGSVGElement, TablerGhost2IconProps>(function TablerGhost2Icon(
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
			<path d="M10 9h.01" />
			<path d="M14 9h.01" />
			<path d="M12 3a7 7 0 0 1 7 7v1l1 0a2 2 0 1 1 0 4l-1 0v3l2 3h-10a6 6 0 0 1 -6 -5.775l0 -.226l-1 0a2 2 0 0 1 0 -4l1 0v-1a7 7 0 0 1 7 -7z" />
			<path d="M11 14h2a1 1 0 0 0 -2 0z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGhost2Icon.displayName = "TablerGhost2Icon";
}

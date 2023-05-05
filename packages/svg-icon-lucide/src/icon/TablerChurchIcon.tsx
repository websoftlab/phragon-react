import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerChurchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerChurchIcon = React.forwardRef<SVGSVGElement, TablerChurchIconProps>(function TablerChurchIcon(
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
			<path d="m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2" />
			<path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
			<path d="M18 22V5l-6-3-6 3v17" />
			<path d="M12 7v5" />
			<path d="M10 9h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerChurchIcon.displayName = "TablerChurchIcon";
}

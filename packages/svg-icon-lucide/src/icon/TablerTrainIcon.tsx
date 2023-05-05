import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrainIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrainIcon = React.forwardRef<SVGSVGElement, TablerTrainIconProps>(function TablerTrainIcon(
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
			<path d="M6 3 H18 A2 2 0 0 1 20 5 V17 A2 2 0 0 1 18 19 H6 A2 2 0 0 1 4 17 V5 A2 2 0 0 1 6 3 z" />
			<path d="M4 11h16" />
			<path d="M12 3v8" />
			<path d="m8 19-2 3" />
			<path d="m18 22-2-3" />
			<path d="M8 15h0" />
			<path d="M16 15h0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTrainIcon.displayName = "TablerTrainIcon";
}

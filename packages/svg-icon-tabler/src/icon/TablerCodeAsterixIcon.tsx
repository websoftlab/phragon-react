import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCodeAsterixIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCodeAsterixIcon = React.forwardRef<SVGSVGElement, TablerCodeAsterixIconProps>(
	function TablerCodeAsterixIcon(props, ref) {
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
				<path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
				<path d="M12 11.875l3 -1.687" />
				<path d="M12 11.875v3.375" />
				<path d="M12 11.875l-3 -1.687" />
				<path d="M12 11.875l3 1.688" />
				<path d="M12 8.5v3.375" />
				<path d="M12 11.875l-3 1.688" />
				<path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCodeAsterixIcon.displayName = "TablerCodeAsterixIcon";
}
